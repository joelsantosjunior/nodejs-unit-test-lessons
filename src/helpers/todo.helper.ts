import { Todo } from "../database/models/todo.model";
import { Request } from 'express';

export const validateIncomeData = (data: Todo) => {

    if (! data.name) { throw new Error('Todo name is missing'); }
    if (! data.description) { throw new Error('Todo description is missing'); }

    return true;
}

export const validateIncomeParams = (req: Request | any) => {
    if (! req.params.id) { throw new Error('Id is missing'); }

    return true;
}

export const testObject = () => {
    return {
        "questionnaire": true,
        "customerAttestation": true,
        "packageSelected": true,
        "payment": false,
        "numberOfRecordsOneTime": 49999,
        "numberOfRecordsPerYear": 49999,
        "step": 4,
        "questions": [
            3,
            3,
            3
        ],
        "percentages": [
            100,
            0,
            0,
            0,
            100,
            0,
            0,
            0
        ],
        "province": "ON",
        "statusChangedByAdmin": false,
        "socialEngineering": [
            {
                "question": "You conduct regular phishing testing / training with your employees",
                "answer": true
            },
            {
                "question": "Your maximum e-transfer value is less than $10,000",
                "answer": true
            }
        ],
        "usaInformation": [
            {
                "question": "Percentage of Revenue derived from the United States",
                "answer": "0 - 25%"
            },
            {
                "question": "Percentage of client records from the United States",
                "answer": "25 - 50%"
            }
        ],
        "identifiableInformation": [
            {
                "question": "Estimated # of records shared with a 3rd party each year",
                "answer": "Less than 50k"
            },
            {
                "question": "Estimated maximum # of records stored on your network at any one time",
                "answer": "Less than 50k"
            }
        ],
        "revenueAbove50M": [
            {
                "text": "Do you have anti-virus and firewall software installed and regularly apply updates and patches?",
                "answer": null,
                "code": "001",
                "type": 1
            }
        ],
        "revenueBelow50M": [
            {
                "text": "Do you have anti-virus and firewall software installed and regularly apply updates and patches?",
                "answer": true,
                "code": "001",
                "type": 1
            }
        ],
        "subsidiaries": [
            ""
        ],
        "claimsHistory": "No open claims AND no closed claims",
        "numberOfRecords": "Less than 50k",
        "deductible": "2500",
        "limits": "$500,000 / $500,000",
        "revenue": 4580000,
        "employees": 50,
        "industry": "Educational Services",
        "restrictedClassesConsent": true,
        "membership": "Cyberboxx**",
        "website": "234.com",
        "fullPriorYearActs": true,
        "cyberDeception": false,
        "includeBricking": false,
        "cyberDeceptionCoverage": 100000,
        "coverageStarts": "2020-06-30T17:44:52.000Z",
        "attestate": true,
        "questionsDeclaration": true,
        "shareQuoteUrl": "http://localhost:4200/verify/1fccd7853265777d355bcd09b0b95eceb649d0edd4b18a6624f006279bda2a67ce0e96c5c6dfc60a9dcd3033b8019cecad41f2e00236",
        "paymentUrl": "",
        "referral": {
            "status": false,
            "reasons": []
        },
        "lineItems": [],
        "jolera": {
            "business": {
                "businessName": "234",
                "address": "20 Toronto St suite 420",
                "city": "Toronto",
                "province": "ON",
                "postalCode": "M5C 2B8",
                "industry": "Educational Services"
            },
            "customer": {
                "firstName": "cas",
                "lastName": "cas",
                "email": "4232@email.com",
                "phone": "(444) 444-4444"
            },
            "productName": "Cyberboxx**",
            "productSKU": "Insurance + Boxx Score Monitoring"
        },
        "timestamps": {
            "quote": null,
            "bound": "2020-06-29T17:45:09.265Z",
            "referral": null,
            "denied": null,
            "start": "2020-06-30T17:44:52.000Z",
            "yearlyTermination": "2021-06-30T03:00:00.000Z"
        },
        "overridden": false,
        "owsyPremium": 0,
        "monitoring": true,
        "packages": {
            "package2": {
                "amount": "1191.8400000000001",
                "commission": "0.1"
            },
            "package3": {
                "amount": "3768.24",
                "commission": "0.1"
            },
            "package4": {
                "amount": "7768.4400000000005",
                "commission": "0.1"
            },
            "package3Lite": {
                "amount": "2768.24",
                "commission": "0.1"
            },
            "package4Lite": {
                "amount": "6768.4400000000005",
                "commission": "0.1"
            }
        },
        "representative": {
            "firstName": "cas",
            "lastName": "cas",
            "email": "4232@email.com"
        },
        "SELimit": 50000,
        "claimsLossesCircumstances": false,
        "revenueAbove30M": [
            {
                "text": "Do you have anti-virus and firewall software installed and regularly apply updates and patches?",
                "answer": true
            }
        ],
        "revenueBelow30M": [
            {
                "text": "Do you have anti-virus and firewall software installed and regularly apply updates and patches?",
                "answer": true
            }
        ],
        "socialEngineeringV3": [
            {
                "question": "Do you conduct regular phishing testing / training with your employees?",
                "answer": true
            }
        ],
        "aggregatePolicyLimit": 250000,
        "retention": 1000,
        "businessName": "234",
        "customerId": "5ef49d67b0931e33d06ff570",
        "producerId": "5ef49d67b0931e33d06ff570",
        "brokerageId": "5b50adee46b5db359c58abf0",
        "officeId": "5b50adf046b5db359c58abf1",
        "email": "4232@email.com",
        "status": "In Progress",
        "numberOfRecords3rdParty": "Less than 50k",
        "jurisdiction": "ON",
        "address": "20 Toronto St suite 420",
        "city": "Toronto",
        "postalCode": "M5C 2B8",
        "commission": [
            {
                "type": "premium",
                "description": "",
                "amount": {
                    "amount": "1964.8400000000001",
                    "currency": "CAD"
                },
                "applicable-items": [
                    {
                        "rate": "0.1",
                        "type": "agency-commission",
                        "amount": "77.3",
                        "description": "Agency Commission"
                    },
                    {
                        "type": "gross-commission",
                        "amount": "77.3",
                        "description": "Gross Commission"
                    },
                    {
                        "rate": "0.08",
                        "type": "state-tax",
                        "amount": "0.00",
                        "description": "State Tax"
                    }
                ]
            },
            {
                "type": "hackbusters",
                "description": "Total Hackbusters fee",
                "amount": {
                    "amount": "1000.00",
                    "currency": "CAD"
                },
                "applicable-items": [
                    {
                        "type": "hackbusters-commission",
                        "amount": "0.00",
                        "description": "Agency Hackbusters Commission"
                    },
                    {
                        "type": "hackbusters-revenue",
                        "amount": "870.00",
                        "description": "Boxx Hackbusters Revenue"
                    },
                    {
                        "rate": "0.13",
                        "type": "hst-tax",
                        "amount": "130.00",
                        "description": "HST Tax"
                    }
                ]
            },
            {
                "type": "jolera-monitoring",
                "description": "Total Jolera Monitoring fee",
                "amount": {
                    "amount": "0.00",
                    "currency": "CAD"
                },
                "applicable-items": [
                    {
                        "type": "jolera-monitoring",
                        "amount": "0.00",
                        "description": "Jolera Monitoring Commission"
                    },
                    {
                        "type": "jolera-revenue",
                        "amount": "0.00",
                        "description": "Jolera Monitoring Revenue"
                    },
                    {
                        "rate": "0.13",
                        "type": "hst-tax",
                        "amount": "0.00",
                        "description": "HST Tax"
                    }
                ]
            },
            {
                "type": "jolera-backup",
                "description": "Total Jolera Backup fee",
                "amount": {
                    "amount": "0.00",
                    "currency": "CAD"
                },
                "applicable-items": [
                    {
                        "type": "jolera-backup",
                        "amount": "0.00",
                        "description": "Jolera Backup Commission"
                    },
                    {
                        "type": "jolera-revenue",
                        "amount": "0.00",
                        "description": "Jolera Backup Revenue"
                    },
                    {
                        "rate": "0.13",
                        "type": "hst-tax",
                        "amount": "0.00",
                        "description": "HST Tax"
                    }
                ]
            }
        ],
        "attestedBy": "cas cas",
        "attestedEmail": "4232@email.com",
        "attestedDateTime": "2020-06-29T17:45:03.820Z",
        "hazardClass": 1
    }
}