import "dotenv/config";
import express from "express";
import db from "@repo/db"
const app = express();
app.use(express.json());


app.post("/hdfcwebhook", async (req, res) => {

    const paymentInfo = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }
    try {
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: (paymentInfo.userId)
                },
                data: {
                    amount: {

                        increment: Number(paymentInfo.amount)
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInfo.token
                },
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Error while processing webhook"
        })
    }

})




const server = app.listen(3003, () => console.log("bank-webhook server is ruinning on port 3003"));
server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
        console.error("Port 3003 is already in use. Another bank-webhook instance is running.");
    } else {
        console.error(err);
    }
    process.exit(1);
});