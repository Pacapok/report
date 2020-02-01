import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt181Req extends BaseReq{
    @ApiModelProperty({ description: 'stockreqnumber', required: true, example: "ITR000098" })
    stockreqnumber: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

}