import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt179mainReq extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

}