import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { feedbackValidationSchema } from 'validationSchema/feedbacks';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getFeedbacks();
    case 'POST':
      return createFeedback();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFeedbacks() {
    const data = await prisma.feedback
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'feedback'));
    return res.status(200).json(data);
  }

  async function createFeedback() {
    await feedbackValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.feedback.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
