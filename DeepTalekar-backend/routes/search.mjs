import db from "../db/connection.mjs";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res, next) => {
    try {

        let adsCollection = await db.collection("ads");

        const keyword = req?.body?.keyword;

        try {
            let results = await adsCollection.aggregate([
                {
                    '$lookup': {
                        'from': 'companies',
                        'localField': 'companyId',
                        'foreignField': '_id',
                        'as': 'company'
                    }
                }, {
                    '$unwind': '$company'
                }, {
                    '$match': {
                        '$or': [
                            {
                                'company.name': {
                                    '$regex': keyword,
                                    '$options': 'i'
                                }
                            }, {
                                'primaryText': {
                                    '$regex': keyword,
                                    '$options': 'i'
                                }
                            }, {
                                'headline': {
                                    '$regex': keyword,
                                    '$options': 'i'
                                }
                            }, {
                                'description': {
                                    '$regex': keyword,
                                    '$options': 'i'
                                }
                            }
                        ]
                    }
                }, {
                    '$project': {
                        '_id': 1,
                        'headline': 1,
                        'description': 1,
                        'primaryText': 1,
                        'companyName': '$company.name',
                        'imageUrl': 1,
                        'url': '$company.url',
                        'companyId': 1,
                        'CTA': 1
                    }
                }, {
                    '$sort': {
                        'companyName': 1
                    }
                }
            ]).toArray();

            // console.log("Results: ", results)

            res.send(results).status(200);
        } catch (error) {
            res.status(500).json({ message: "📢 Something went wrong while quering in the search!", error: error?.message })
        }
    } catch (error) {
        res.status(500).json({ message: "⚠ Error occured in the /search API", error: error?.message });
        next(error);
    }

})

export default router;