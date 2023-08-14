function GeneralInfo(teamName, sprintName, currDay, totalDay){
    this.teamName = teamName;
    this.sprintName = sprintName;
    this.currDay = currDay;
    this.totalDay = totalDay;
}

var genInfo = new GeneralInfo("XFactor", "Sprint5: Locked and Loaded", "7", "4");

export {GeneralInfo, genInfo};

/* -------------- */
/*
function TotalRatio(done, total){
    this.done = done;
    this.total = total;
}

var totalRatio = new TotalRatio("684", "960");

export {TotalRatio, totalRatio};
*/
/* -------------- */

function Employee(empID, fName, sName, photo, calls, isResponsible){
    this.empID = empID;
    this.fName = fName;
    this.sName = sName;
    this.photo = photo;
    this.calls = calls;
    this.isResponsible = isResponsible;
}

var empIDCounter = 1;

var employeeArr = [
    
    new Employee(empIDCounter++, "Atınç Mert", "Uz", "https://i.pravatar.cc/150?img=11", 2, false),
    new Employee(empIDCounter++, "Batuhan", "Demir", "https://i.pravatar.cc/150?img=14", 4, true),
    new Employee(empIDCounter++, "Can Deniz", "Önem", "https://i.pravatar.cc/150?img=12", 5, false),
    new Employee(empIDCounter++, "Çağatay", "Molkoç", "https://i.pravatar.cc/150?img=15", 1, false),
    new Employee(empIDCounter++, "Doğanay Öz", "Örüm", "https://i.pravatar.cc/150?img=28", 3, false),
    new Employee(empIDCounter++, "Fatih", "Çetin", "https://i.pravatar.cc/150?img=53", 2, false),
    new Employee(empIDCounter++, "Funda", "Bayraktar", "https://i.pravatar.cc/150?img=5", 5, false),
    new Employee(empIDCounter++, "Gamze", "Gönül", "https://i.pravatar.cc/150?img=24", 3, true),
    new Employee(empIDCounter++, "Murat", "Arslan", "https://i.pravatar.cc/150?img=60", 6, false),
    new Employee(empIDCounter++, "Murat", "Yıldız", "https://i.pravatar.cc/150?img=8", 2, true),
    new Employee(empIDCounter++, "Pınar", "Sırma", "https://i.pravatar.cc/150?img=20", 1, false),
    new Employee(empIDCounter++, "Sarp", "Ok", "https://i.pravatar.cc/150?img=52", 3, true),
    new Employee(empIDCounter++, "Sema", "Kaya", "https://i.pravatar.cc/150?img=47", 7, false),
    new Employee(empIDCounter++, "Serenay", "Ay", "https://i.pravatar.cc/150?img=32", 1, false),
    new Employee(empIDCounter++, "Tarık Halim", "Kutludere", "https://i.pravatar.cc/150?img=13", 2, true),
    new Employee(empIDCounter++, "Tuğçe Naz", "Yaman", "https://i.pravatar.cc/150?img=27", 1, true)
    
];

export {Employee, employeeArr};

/* -------------- */

var taskIDCounter = 0;
var subTaskIDCounter = 1;

function Task(taskID, taskDescription, subTaskList){
    this.taskID = taskID;
    this.taskDescription = taskDescription;
    this.subTaskList = subTaskList;

    this.makeAssignment = function(emp, desc, assignedHour, doneHour, stateOfTask, lastLoggedTime){
        this.subTaskList.push(new SubTask(this.taskID + (subTaskIDCounter++), emp, desc, this, assignedHour, doneHour, stateOfTask, lastLoggedTime));
    };

    this.isGivenEmployeeAssigned = function (emp){

        for(let i = 0; i < this.subTaskList.length; i++){
            if(this.subTaskList[i].assignee === emp){
                return true;
            }
        }
        return false;
    };

    this.progress = function(){
        var sum1 = 0.0;
        var sum2 = 0.001;

        this.subTaskList.forEach(element => {
            sum1 += element.doneHour;
            sum2 += element.assignedHour;
        });

        return Math.round(100 * sum1 / sum2);
    };

    this.findSubTasksOfGivenEmployee = function(emp){

        var result = [[], [], [], []];

        for(let i = 0; i < this.subTaskList.length; i++){
            if(subTaskList[i].assignee === emp ){

                if(subTaskList[i].stateOfTask === 0){
                    result[0].push(subTaskList[i]);
                }
                else if(subTaskList[i].stateOfTask === 1){
                    result[1].push(subTaskList[i]);
                }
                else if(subTaskList[i].stateOfTask === 2){
                    result[2].push(subTaskList[i]);
                }
                else{
                    result[3].push(subTaskList[i]);
                }

            }
        }

        return result;

    };

    this.findResponsibilityRatio = function(emp){

        var count = 0;

        for(let i = 0; i < this.subTaskList.length; i++){
            
            if(subTaskList[i].assignee === emp ){
                count++;
            }
        }

        return [count, this.subTaskList.length];

    };

    this.findOtherMembers = function(emp){

        var result = [];
        
        for(let i = 0; i < this.subTaskList.length; i++){
            
            if(subTaskList[i].assignee !== emp ){
                if(result.includes(subTaskList[i].assignee) === false){
                    result.push(subTaskList[i].assignee);
                }
                
            }
        }
        return result;
    };

}

function SubTask(taskID, assignee, taskDescription, parentTask, assignedHour, doneHour, stateOfTask, lastLoggedTime){ /* stateOfTask: 0->to-do, 1->parking, 2->in-progress, 3->done */
    this.taskID = taskID;
    this.assignee = assignee;
    this.taskDescription = taskDescription;
    this.parentTask = parentTask;
    this.assignedHour = assignedHour;
    this.doneHour = doneHour;
    this.stateOfTask = stateOfTask;
    this.lastLoggedTime = lastLoggedTime;
}

var tasksArr = [];

for(let j = 0; j < 30; j++){
    tasksArr.push(new Task(1000 + 100 * j, "Task Description", []));
}

tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 16, 12, 2, null);
tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 15, 6, 2, null);
tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 8, 8, 3, null);
tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 0, 0, null);
tasksArr[0].makeAssignment(employeeArr[5], "Sub-Task Description", 10, 0, 0, null);
tasksArr[0].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 5, 1, null);
tasksArr[0].makeAssignment(employeeArr[7], "Sub-Task Description", 24, 16, 2, null);
tasksArr[0].makeAssignment(employeeArr[8], "Sub-Task Description", 6, 6, 3, null);
tasksArr[0].makeAssignment(employeeArr[10], "Sub-Task Description", 20, 7, 1, null);
tasksArr[0].makeAssignment(employeeArr[14], "Sub-Task Description", 64, 36, 2, null);

subTaskIDCounter = 1;

tasksArr[1].makeAssignment(employeeArr[1], "Sub-Task Description", 9, 4, 1, null);
tasksArr[1].makeAssignment(employeeArr[2], "Sub-Task Description", 4, 4, 3, null);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 2, 2, 3, null);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 8, 8, 3, null);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 4, 4, 3, null);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 30, 0, 0, null);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 20, 18, 2, null);
tasksArr[1].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 8, 2, null);


subTaskIDCounter = 1;


tasksArr[2].makeAssignment(employeeArr[4], "Sub-Task Description", 12, 8, 1, null);

subTaskIDCounter = 1;

tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 15, 4, 1, null);
tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 6, 3, 2, null);
tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 8, 0, 0, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 18, 16, 2, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 10, 10, 3, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 18, 1, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 2, 2, 3, null);

subTaskIDCounter = 1;

tasksArr[4].makeAssignment(employeeArr[1], "Sub-Task Description", 12, 2, 2, null);
tasksArr[4].makeAssignment(employeeArr[2], "Sub-Task Description", 6, 3, 2, null);
tasksArr[4].makeAssignment(employeeArr[4], "Sub-Task Description", 5, 0, 0, null);
tasksArr[4].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 1, null);
tasksArr[4].makeAssignment(employeeArr[10], "Sub-Task Description", 2, 2, 3, null);
tasksArr[4].makeAssignment(employeeArr[11], "Sub-Task Description", 20, 14, 2, null);
tasksArr[4].makeAssignment(employeeArr[15], "Sub-Task Description", 8, 0, 0, null);
tasksArr[4].makeAssignment(employeeArr[15], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[5].makeAssignment(employeeArr[11], "Sub-Task Description", 30, 22, 2, null);
tasksArr[5].makeAssignment(employeeArr[11], "Sub-Task Description", 24, 6, 2, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 9, 0, 0, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 6, 1, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 12, 3, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 20, 16, 2, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 0, 0, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[6].makeAssignment(employeeArr[3], "Sub-Task Description", 16, 12, 2, null);
tasksArr[6].makeAssignment(employeeArr[3], "Sub-Task Description", 15, 6, 2, null);
tasksArr[6].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 8, 3, null);
tasksArr[6].makeAssignment(employeeArr[4], "Sub-Task Description", 12, 0, 0, null);
tasksArr[6].makeAssignment(employeeArr[5], "Sub-Task Description", 10, 0, 0, null);
tasksArr[6].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 5, 1, null);
tasksArr[6].makeAssignment(employeeArr[11], "Sub-Task Description", 24, 16, 2, null);
tasksArr[6].makeAssignment(employeeArr[13], "Sub-Task Description", 6, 6, 3, null);
tasksArr[6].makeAssignment(employeeArr[13], "Sub-Task Description", 20, 7, 1, null);
tasksArr[6].makeAssignment(employeeArr[15], "Sub-Task Description", 64, 36, 2, null);

subTaskIDCounter = 1;

tasksArr[7].makeAssignment(employeeArr[1], "Sub-Task Description", 9, 4, 1, null);
tasksArr[7].makeAssignment(employeeArr[1], "Sub-Task Description", 4, 4, 3, null);
tasksArr[7].makeAssignment(employeeArr[2], "Sub-Task Description", 2, 2, 3, null);
tasksArr[7].makeAssignment(employeeArr[2], "Sub-Task Description", 8, 8, 3, null);


subTaskIDCounter = 1;


tasksArr[8].makeAssignment(employeeArr[14], "Sub-Task Description", 12, 8, 1, null);

subTaskIDCounter = 1;

tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 15, 4, 1, null);
tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 6, 3, 2, null);
tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 0, 0, null);
tasksArr[9].makeAssignment(employeeArr[7], "Sub-Task Description", 18, 16, 2, null);
tasksArr[9].makeAssignment(employeeArr[7], "Sub-Task Description", 10, 10, 3, null);
tasksArr[9].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 18, 1, null);
tasksArr[9].makeAssignment(employeeArr[12], "Sub-Task Description", 2, 2, 3, null);

subTaskIDCounter = 1;

tasksArr[10].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 2, 2, null);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 6, 3, 2, null);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 5, 0, 0, null);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 1, null);
tasksArr[10].makeAssignment(employeeArr[9], "Sub-Task Description", 2, 2, 3, null);
tasksArr[10].makeAssignment(employeeArr[9], "Sub-Task Description", 20, 14, 2, null);
tasksArr[10].makeAssignment(employeeArr[10], "Sub-Task Description", 8, 0, 0, null);
tasksArr[10].makeAssignment(employeeArr[10], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[11].makeAssignment(employeeArr[7], "Sub-Task Description", 30, 22, 2, null);
tasksArr[11].makeAssignment(employeeArr[8], "Sub-Task Description", 24, 6, 2, null);
tasksArr[11].makeAssignment(employeeArr[8], "Sub-Task Description", 9, 0, 0, null);
tasksArr[11].makeAssignment(employeeArr[10], "Sub-Task Description", 12, 6, 1, null);
tasksArr[11].makeAssignment(employeeArr[11], "Sub-Task Description", 12, 12, 3, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 20, 16, 2, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 0, 0, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[12].makeAssignment(employeeArr[0], "Sub-Task Description", 16, 12, 2, null);
tasksArr[12].makeAssignment(employeeArr[2], "Sub-Task Description", 15, 6, 2, null);
tasksArr[12].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 8, 3, null);
tasksArr[12].makeAssignment(employeeArr[6], "Sub-Task Description", 12, 0, 0, null);
tasksArr[12].makeAssignment(employeeArr[8], "Sub-Task Description", 10, 0, 0, null);
tasksArr[12].makeAssignment(employeeArr[10], "Sub-Task Description", 8, 5, 1, null);
tasksArr[12].makeAssignment(employeeArr[12], "Sub-Task Description", 24, 16, 2, null);
tasksArr[12].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 6, 3, null);

subTaskIDCounter = 1;

tasksArr[13].makeAssignment(employeeArr[0], "Sub-Task Description", 9, 4, 1, null);
tasksArr[13].makeAssignment(employeeArr[1], "Sub-Task Description", 4, 4, 3, null);
tasksArr[13].makeAssignment(employeeArr[2], "Sub-Task Description", 2, 2, 3, null);
tasksArr[13].makeAssignment(employeeArr[2], "Sub-Task Description", 8, 8, 3, null);


subTaskIDCounter = 1;


tasksArr[14].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 8, 1, null);

subTaskIDCounter = 1;

tasksArr[15].makeAssignment(employeeArr[1], "Sub-Task Description", 15, 4, 1, null);
tasksArr[15].makeAssignment(employeeArr[3], "Sub-Task Description", 6, 3, 2, null);
tasksArr[15].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 0, 0, null);
tasksArr[15].makeAssignment(employeeArr[5], "Sub-Task Description", 18, 16, 2, null);
tasksArr[15].makeAssignment(employeeArr[7], "Sub-Task Description", 10, 10, 3, null);
tasksArr[15].makeAssignment(employeeArr[11], "Sub-Task Description", 20, 18, 1, null);
tasksArr[15].makeAssignment(employeeArr[13], "Sub-Task Description", 2, 2, 3, null);
tasksArr[15].makeAssignment(employeeArr[15], "Sub-Task Description", 6, 2, 1, null);

subTaskIDCounter = 1;

tasksArr[16].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 2, 2, null);
tasksArr[16].makeAssignment(employeeArr[3], "Sub-Task Description", 6, 3, 2, null);
tasksArr[16].makeAssignment(employeeArr[4], "Sub-Task Description", 5, 0, 0, null);
tasksArr[16].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 1, null);
tasksArr[16].makeAssignment(employeeArr[8], "Sub-Task Description", 2, 2, 3, null);
tasksArr[16].makeAssignment(employeeArr[9], "Sub-Task Description", 20, 14, 2, null);
tasksArr[16].makeAssignment(employeeArr[14], "Sub-Task Description", 8, 0, 0, null);
tasksArr[16].makeAssignment(employeeArr[15], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[17].makeAssignment(employeeArr[1], "Sub-Task Description", 30, 22, 2, null);
tasksArr[17].makeAssignment(employeeArr[1], "Sub-Task Description", 24, 6, 2, null);
tasksArr[17].makeAssignment(employeeArr[7], "Sub-Task Description", 9, 0, 0, null);
tasksArr[17].makeAssignment(employeeArr[7], "Sub-Task Description", 12, 6, 1, null);
tasksArr[17].makeAssignment(employeeArr[11], "Sub-Task Description", 12, 12, 3, null);
tasksArr[17].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 16, 2, null);
tasksArr[17].makeAssignment(employeeArr[13], "Sub-Task Description", 6, 0, 0, null);
tasksArr[17].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[18].makeAssignment(employeeArr[5], "Sub-Task Description", 30, 22, 2, null);
tasksArr[18].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 8, 3, null);
tasksArr[18].makeAssignment(employeeArr[8], "Sub-Task Description", 9, 0, 0, null);
tasksArr[18].makeAssignment(employeeArr[9], "Sub-Task Description", 12, 6, 1, null);
tasksArr[18].makeAssignment(employeeArr[9], "Sub-Task Description", 12, 12, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

var sumTotalDone = 0.0;
var sumTotalAssigned = 0.001;

for(let k = 0; k < tasksArr.length; k++){

    for(let m = 0; m < tasksArr[k].subTaskList.length; m++){
        sumTotalDone += tasksArr[k].subTaskList[m].doneHour;
        sumTotalAssigned += tasksArr[k].subTaskList[m].assignedHour;
    }

}

var sprintRatio = Math.round(sumTotalDone * 100 / sumTotalAssigned);

export{Task, tasksArr, sprintRatio};

