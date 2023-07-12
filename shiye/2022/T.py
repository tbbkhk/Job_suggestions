import xlwings as xw


# 
wb = xw.Book('P020220424472107519907.xls')

sheet = wb.sheets['Sheet1']

nor_ = ['id','unit','Post','Nature_position','Number','Graduation_time','Academic_requirements','College_majors','Undergraduate_majors','Graduate_majors','political_landscape','Job_code','Examination','interview','remark','consultation']


# cc = [389.0, '区直', '西藏自治区气象局', '林芝市墨脱县气象局', '事业\n单位', 1.0, 202220389.0, '气象类、计算机科学与技术', '不限', '本科及以上', '2020、2021、2022年毕业生', '自然科学专技类(C类)', '是', '否', '1.2020年、2021年普通高校毕业生需离校时和在择业期内未落实工作单位\n2.如笔试成绩相同组织考生进行面试', '0891-6320741']
# print(len(nor_)==len(cc))

aa = sheet['A3'].expand().value
# # print(aa)

new_list = []

for i in aa:
	new_list.append(dict(zip(nor_,i)))

print(new_list)
