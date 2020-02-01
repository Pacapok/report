import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt801Req extends BaseReq{
    @ApiModelProperty({description: 'The cat\'s age'})
    param1: string;

    @ApiModelProperty({description: 'The cat\'s breed'})
    param2: string;

    @ApiModelProperty({ description: 'patientvisituid', required: true, example: "5b8a09cd3238d86bf08fb581" })
    patientvisituid: string;

    @ApiModelProperty({ description: 'searchstring', required: true, example: "5b8a09cd3238d86bf08fb581" })
    searchstring: string;

    @ApiModelProperty({ description: 'billingSubGroupUids', required: true, example: "5b8a09cd3238d86bf08fb581" })
    billingSubGroupUids: string;

    @ApiModelProperty({ description: 'billingGroupUids', required: true, example: "5b8a09cd3238d86bf08fb581" })
    billingGroupUids: string;

}