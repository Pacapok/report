import { ApiModelProperty } from "@nestjs/swagger";
import { BaseReq } from "./basereq";

export class Rt186Req extends BaseReq{
    @ApiModelProperty({ description: 'patientuid', required: true, example: "5b88f6603238d86bf05da847" })
    patientuid: string;

    @ApiModelProperty({ description: 'patientvisituid', required: true, example: "5b8a09e53238d86bf094612b" })
    patientvisituid: string;

    @ApiModelProperty({description: 'The cat\'s name'})
    param3: string;

}