import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt434Req extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

    @ApiModelProperty({ description: 'payoragreementuid', required: true, example: "5b85b02b3238d86bf0240cb3" })
    payoragreementuid: string;

}