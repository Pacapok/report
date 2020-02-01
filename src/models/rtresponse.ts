import { ApiModelProperty } from "@nestjs/swagger";

export class RtResponse {

    @ApiModelProperty()
    content: String;

    @ApiModelProperty()
    filename: String;

}