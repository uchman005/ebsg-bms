//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { id } = req.query;
  const {
    personalTotal,
    overheadTotal,
    capitalTotal,
    recurrentTotal,
    expenditureTotal,
  } = req.body;

  await prisma.mda
    .update({
      where: { mdaCode: id as string },
      data: {
        personalTotal: parseFloat(personalTotal),
        overheadTotal: parseFloat(overheadTotal),
        capitalTotal: parseFloat(capitalTotal),
        recurrentTotal: parseFloat(recurrentTotal),
        expenditureTotal: parseFloat(expenditureTotal),
        registered: true,
      },
    })
    .then((mda) => {
      console.log(mda);
      return res.status(200).json({
        status: ApiStatus.MDA_REGISTERED,
        data: mda,
        error: `MDA_REGISTERED:${ApiStatus.MDA_REGISTERED}`,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_REGISTERED,
        error: `MDA_REGISTERED:${ApiStatus.MDA_REGISTERED}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
