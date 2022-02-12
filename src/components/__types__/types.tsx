export interface Plan {
    idx: number;
    planID: string;
    name: string;
    tech: string;
    broadband: string;
    telephony: string;
    cost: number;
    startupFee: number;
    bundleDiscount: number;
    monthlyDiscount: any;
    contractLength: number;
    planType: string;
    customerType: string;
    cis: string;
    affiliate: string;
    callRate: string;
    earlyReconFee: any;
    broadbandCancellFee: any;
    telCancellFee: any;
    boltonList: string;
    flybuysPoints: string;
    flybuysRoundel: string;
    position: any;
    allBoltons:any;
    selectedBoltons:any;
    selected:boolean;
    speedPackCost:number;
    monthly:number;
    upfront:number;
    mtc:number

}

export interface CallRate {
    name: string;
    callLocal: string;
    callNational: string;
    callMobile: string;
    callInt: string;
    call13: string;
    callCommunity: string;
}

export interface Bolton {
    id: string;
    name: string;
    compID: string;
    cost: any;
    costType: string;
    configSection: string;
    group: string;
    cartTitle: string;
    cartSummary: string;
    Image: string;
    type: string;
    dependency: string;
    offID: string;
    superBoltonID?: any;
    included: boolean;
    added: boolean;
    checkout: boolean;
}

export interface RootObject {
    plans: Plan[];
    callRates: CallRate[];
    boltons: Bolton[];
}