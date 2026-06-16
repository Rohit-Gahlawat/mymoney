
"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { addMoney } from "@/app/actions";




const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {

    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com"
}];



export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState("");
    const [amount, setAmount] = useState(0);
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={(t) => {
                setAmount(Number(t));

            }} />
            <div className="pb-1.5 pt-4 text-sm font-medium text-stone-700">
                Bank
            </div>
            <Select onSelect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                setProvider(value)
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
            <div className="pt-6">
                <Button onClick={async () => {
                    await addMoney(amount, provider)
                    window.location.href = redirectUrl || ""
                }}>
                    Add Money
                </Button>
            </div>
        </div>
    </Card>
}
