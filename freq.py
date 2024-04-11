import matplotlib.pyplot  as plt
def somme(a):
    value=0
    for e in a:
        value+=e
    return value 
def gen(x,prec):
    val=[somme(l for l in range(prec+i)) for i in range(x)]
    index=[i for i in range(len(val))]
    plt.plot(val,index)
    return
gen(10,2)
plt.show()