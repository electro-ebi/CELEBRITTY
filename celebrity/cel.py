R = int(input("Enter the number of rows:"))
C = int(input("Enter the number of columns:"))
m= []
print("Enter the entries rowwise:")
for i in range(R): 
    a =[]
    for j in range(C):
        a.append(int(input()))
    m.append(a)
for i in range(R):
    for j in range(C):
        print(m[i][j], end = " ")
    print()
flag=False 
for i in range (R):
    for j in range(C):
        if (i==j):
            c=r=0 
            for a in range(R):
                if (m[i][a]==0):
                    c=c+1
            for b in range(C):
                if(m[b][j]==1):
                    r=r+1
            if(c==R and r==(C-1)):
                flag=True            
if(flag):
    print("It is celebrity")
else:
    print("it is not celebrity")