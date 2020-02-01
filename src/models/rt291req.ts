import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class  Rt291Req extends BaseReq{
    @ApiModelProperty({ description: 'startdate', required: true, example: "" })
    param1: string;

    @ApiModelProperty({ description: 'enddate', required: true, example: "" })
    param2: string;


}