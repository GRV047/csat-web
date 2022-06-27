export const dataSet = [
    {
        "_id":"101",
        "questionText": "How satisfied were you with your experience with Successive Technologies?",
        "choices": ["Very Poor", "Poor", "Neutral", "Good", "Very Good"],
        "uniqueId": "experience",
        "expandableOptions": ["Good", "Very Good"],
        "localDisplayOrder":"0",
        "type": "Radio",
        "isParent": "Yes",
        "status": true,
        "childSchema": [{
            "_id":"102",
            "questionText": "How likely are you to recommend our services to a colleague?",
            "choices": ["1", "2", "3", "4", "5"],
            "expandableOptions": ["3"],
            "uniqueId":"recomendation",
            "localDisplayOrder":"0.1",
            "type": "Radio",
            "isParent": "No",
            "status": true,
            "childSchema": [{
                "_id":"103",
                "questionText": "How likely are you to recommend our services to a colleague?",
                "choices": ["1", "2", "3", "4", "5"],
                "expandableOptions": ["5"],
                "uniqueId":"services",
                "localDisplayOrder":"0.1.1",
                "type": "Radio",
                "isParent": "No",
                "status": true,
                "childSchema": [{
                    "_id":"104",
                    "questionText": "How likely are you to recommend our services to a colleague?",
                    "choices": ["1", "2", "3", "4", "5"],
                    "expandableOptions": ["1"],
                    "uniqueId":"chield3",
                    "localDisplayOrder":"0.1.1.1",
                    "type": "Radio",
                    "isParent": "No",
                    "status": true,
                    "childSchema": [{
                        "_id":"105",
                        "questionText": "How likely are you to recommend our services to a colleague?",
                        "choices": ["1", "2", "3", "4", "5"],
                        "expandableOptions": [],
                        "uniqueId":"chield4",
                        "localDisplayOrder":"0.1.1.1.1",
                        "type": "Radio",
                        "isParent": "No",
                        "status": true
                    }]
                }]
            }]
        }]
    },
    {
        "_id":"106",
        "questionText": "Do you Like my skills?",
        "choices": ["1", "2", "3", "4", "5"],
        "expandableOptions":[],
        "uniqueId":"skills1",
        "type": "Radio",
        "localDisplayOrder":0,
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    },
    {
        "_id":"107",
        "questionText": "I know you do?",
        "choices": [],
        "expandableOptions":[],
        "uniqueId":"personal",
        "type": "Boolean",
        "localDisplayOrder":0,
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    }
]