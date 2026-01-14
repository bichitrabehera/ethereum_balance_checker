import { NextResponse, NextRequest } from "next/server";
import web3 from "@/utils/web3";

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();
    if (!address) {
      return NextResponse.json(
        { error: "address is required" },
        { status: 400 }
      );
    }
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, "ether");
    return NextResponse.json({ balance: balanceEth, unit: "ETH" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch balance" },
      { status: 500 }
    );
  }
}
