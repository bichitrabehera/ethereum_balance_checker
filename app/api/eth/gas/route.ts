import { NextResponse } from "next/server";
import web3 from "@/utils/web3";

export async function GET() {
  try {
    const gasprice = await web3.eth.getGasPrice();
    const value = web3.utils.fromWei(gasprice, "gwei");
    return NextResponse.json({ gasPrice: value, unit: "gwei" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch gas price" },
      { status: 500 }
    );
  }
}
