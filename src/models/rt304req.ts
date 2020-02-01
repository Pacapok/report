import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt304Req extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({ description: 'billingserviceuid', required: true, example: "5ba86fbc1de8aea229569d48" })
    billingserviceuid: string;

}