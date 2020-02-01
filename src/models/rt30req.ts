import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt30Req extends BaseReq{
    // @ApiModelProperty({ description: 'ReceiptNumber', required: true, example: "18-DO17001069" })
    // ReceiptNumber: string;

    // @ApiModelProperty({ description: 'patientuid', required: true, example: "5b88f6853238d86bf0648e68" })
    // patientuid: string;


    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

}