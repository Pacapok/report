import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt430Req extends BaseReq{
    @ApiModelProperty({ description: 'startdate', required: true, example: "2018-02-28T00:00:00.000Z"})
    param1: string;

    @ApiModelProperty({ description: 'enddate', required: true, example: "2018-02-29T00:00:00.000Z" })
    param2: string;


}