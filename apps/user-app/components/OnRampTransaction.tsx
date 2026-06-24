import { Card } from "@repo/ui/card"
import { OnRampStatusType } from "@repo/db";


const statusStyles: Record<string, string> = {
    Success: "bg-[#399918]/10 text-[#399918] ring-[#399918]/20",
    Processing: "bg-[#6367FF]/10 text-[#6367FF] ring-[#6367FF]/20",
    Failed: "bg-[#FF0052]/10 text-[#FF0052] ring-[#FF0052]/20"
};

export const OnRampTransactions = async ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: OnRampStatusType,
        provider: string
    }[]
}) => {

    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="py-10 text-center text-sm text-stone-400">
                No Recent transactions
            </div>
        </Card>
    }

    return <Card title="Recent Transactions">
        <div className="flex flex-col divide-y divide-gray-200">
            {transactions.map((t, i) => <div key={i} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                    <div className="text-sm font-medium text-stone-700">
                        Received INR
                    </div>
                    <div className="text-xs text-stone-400">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                    <div className="text-sm font-semibold tabular-nums text-[#399918]">
                        + Rs {t.amount / 100}
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${statusStyles[t.status] ?? "bg-gray-100 text-gray-600 ring-gray-600/20"}`}>
                        {t.status}
                    </span>
                </div>
            </div>)}
        </div>
    </Card>
}
