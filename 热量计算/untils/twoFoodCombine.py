import sys
sys.path.append("..")
import numpy as np
from scipy import optimize
from food import oneFood
from prettytable import PrettyTable
def twoFoodOneMeal(food1:oneFood,food2:oneFood,calories=500,p2cDown=1,p2cup=1.5):
    c = np.array([food1.fat,food2.fat])
    A = np.array([[-1*food1.protein2carbohydrate(p2cDown),-1*food2.protein2carbohydrate(p2cDown)],
                  [food1.protein2carbohydrate(p2cup),food2.protein2carbohydrate(p2cup)]])
    b = np.array([0,0])
    Aeq = np.array([[food1.calories,food2.calories]])
    beq = np.array([calories])
    res = optimize.linprog(c,A,b,Aeq,beq)
    # print(res)
    showResult(food1,food2,res.x)
def showResult(food1:oneFood,food2:oneFood,res):
    # print(res[0]*food1.calories+res[1]*food2.calories)
    table = PrettyTable()
    table.field_names = ["","蛋白","碳水","脂肪","sumup"]
    temRow = [
        "净含量g",
        res[0]*food1.protein+res[1]*food2.protein,
        res[0]*food1.carbohydrate+res[1]*food2.carbohydrate,
        res[0]*food1.fat+res[1]*food2.fat]
    temRow.append(sum(temRow[1:]))
    temRow2 = temRow.copy()
    temRow2[0] = "卡路里Kcal"
    temRow2[1],temRow2[2] = temRow2[1]*4,temRow2[2]*4
    temRow2[3] = temRow2[3]*9
    temRow2[-1] = (sum(temRow2[1:-1]))
    for i in range(1,5):
        temRow[i] = round(temRow[i],2)
        temRow2[i] = round(temRow2[i],2)
    table.add_row(temRow)
    table.add_row(temRow2)
    print(f"{food1.name}:{round(res[0]*100,2)}g {food2.name}:{round(res[1]*100,2)}g ")
    print(table)
