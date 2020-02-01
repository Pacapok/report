import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt423Req extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({ description: 'payoragreementuid', required: true, example: "5b85b02b3238d86bf0240cb3" })
    payoragreementuid: string;

    @ApiModelProperty({ description: 'searchstring', required: true, example: "5b8a09cd3238d86bf08fb581" })
    searchstring: string;

}