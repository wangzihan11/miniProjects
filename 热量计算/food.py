class oneFood:
    def __init__(self,name,carbohydrate,protein,fat):
        '''每100g的数据'''
        self.name = name
        self.carbohydrate = carbohydrate
        self.protein,self.fat = protein,fat
        self.getCalories()
    def getCalories(self):
        self.calories = self.carbohydrate*4+\
            self.protein*4+self.fat*9
    def protein2carbohydrate(self,p2c):
        '''这种食物碳水热量和蛋白的比'''
        return self.protein - p2c*self.carbohydrate