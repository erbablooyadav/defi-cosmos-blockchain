import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRepayLoan } from "./types/cognizantblockchain/loan/tx";
import { MsgCancelLoan } from "./types/cognizantblockchain/loan/tx";
import { MsgApproveLoan } from "./types/cognizantblockchain/loan/tx";
import { MsgRequestLoan } from "./types/cognizantblockchain/loan/tx";
import { MsgLiquidateLoan } from "./types/cognizantblockchain/loan/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cognizantblockchain.loan.MsgRepayLoan", MsgRepayLoan],
    ["/cognizantblockchain.loan.MsgCancelLoan", MsgCancelLoan],
    ["/cognizantblockchain.loan.MsgApproveLoan", MsgApproveLoan],
    ["/cognizantblockchain.loan.MsgRequestLoan", MsgRequestLoan],
    ["/cognizantblockchain.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    
];

export { msgTypes }