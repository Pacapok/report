import { BaseReq } from "./basereq";
import { ApiModelProperty } from "@nestjs/swagger";

export class REFERReq extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

}