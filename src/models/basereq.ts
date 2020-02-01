import { ApiModelProperty } from "@nestjs/swagger";

export class BaseReq {
    
    @ApiModelProperty({ description: 'loginuid', required: true, example: "5b862a593238d86bf03a39a9" })
    loginuid: string;

    @ApiModelProperty({ description: 'searchcriteria', required: true, example: "" })
    searchcriteria: string;

    @ApiModelProperty({ description: 'organisationuid', required: true, example: "5b20f438d1202e29ce16f711" })
    organisationuid: string;

    @ApiModelProperty({ description: 'patientuid', required: true, example: "5d4029eff15e720cb27d4458" })
    patientuid: string;

    @ApiModelProperty({ description: 'patientvisituid', required: true, example: "5d71cb4f643ea979b4dcdaf5" })
    patientvisituid: string;

    @ApiModelProperty({ description: 'fromdate', required: true, example: "2018-01-01T17:00:00.000Z" })
    fromdate: string;

    @ApiModelProperty({ description: 'todate', required: true, example: "2018-11-31T16:59:59.999Z" })
    todate: string;

    @ApiModelProperty({ description: 'incomesource', required: true, example: "5b20f40dd1202e29ce16f4eb" })
    incomesource: string;

    @ApiModelProperty({ description: 'storeuid', required: true, example: "" })
    storeuid: string; //5bcfd73197c3717f427d7197 //5b7fe98e3238d86bf0d5a526

    @ApiModelProperty({ description: 'itemuid', required: true, example: "" })
    itemuid: string; //5bcfd73197c3717f427d719e //5b7ff04d3238d86bf0de024e

    @ApiModelProperty({ description: 'itemmasteruid', required: true, example: "5bcfd73197c3717f427d719e" })
    itemmasteruid: string; 

    @ApiModelProperty({ description: 'ReceiptNumber', required: true, example: "18-DRF18XXXXXX" })
    ReceiptNumber: string;

    @ApiModelProperty({ description: 'reporttemplateuid', required: true, example: "" })
    reporttemplateuid: string;

    @ApiModelProperty({ description: 'usersuid', required: true, example: "5bcfcb3997c3717f427d4c6a" })
    usersuid: string;

    @ApiModelProperty({ description: 'keywordSearch', required: false, example: "-" })
    keywordSearch: string;

    @ApiModelProperty({ description: 'sequencenumber', required: true, example: "RF0082" })
    sequencenumber: string;

    @ApiModelProperty({ description: 'payoragreement', required: true, example: "5b7fd7153238d86bf0c4a945" })
    payoragreement: string;

    @ApiModelProperty({ description: 'isbill', required: true, example: "" })
    isbill: string;

    @ApiModelProperty({ description: 'careprovideruids', required: true, example: "" })
    careprovideruids: string;  

    @ApiModelProperty({ description: 'departmentuids', required: true, example: "" })
    departmentuids: string;  

    @ApiModelProperty({ description: 'orderset', required: true, example: "" })
    orderset: string;  

    @ApiModelProperty({ description: 'tpauid', required: true, example: "" })
    tpauid: string;  

    @ApiModelProperty({ description: 'comment', required: true, example: "" })
    comment: string;  

    @ApiModelProperty({ description: 'fromamount', required: true, example: "" })
    fromamount: string;  

    @ApiModelProperty({ description: 'toamount', required: true, example: "" })
    toamount: string;  

    @ApiModelProperty({ description: 'entypeuid', required: true, example: "" })
    entypeuid: string;

    @ApiModelProperty({ description: 'druggroupuid', required: true, example: "" })
    druggroupuid: string; 
    
    @ApiModelProperty({ description: 'orderitemuid', required: true, example: "" })
    orderitemuid: string;

    @ApiModelProperty({ description: 'allocatebydate', required: true, example: true })
    allocatebydate: boolean;

    @ApiModelProperty({ description: 'frequencyuid', required: true, example: "" })
    frequencyuid: string;

    @ApiModelProperty({ description: 'wardid', required: true, example: "" })
    warduid: string;

    @ApiModelProperty({ description: 'printbydate', required: true, example: "" })
    printbydate: string;
}   
