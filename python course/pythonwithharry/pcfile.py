# f = open('poem.txt')
# a=f.read()
# if 'suraj' in a:
#     print("suraj is present.")
# else:
#     print("suraj is absent.")
# f.close()

# def game():
#     return 5426
# score = game()
# with open('highscore.txt') as f:
#     highscore = int(f.read())
# if highscore<score:
#     with open('highscore.txt','w') as f:
#         f.write(str(score))

for i in range(2, 21):
    with open(f"tables/Multiplication_table_if_{i}",'w') as f:
        for j in range(1,11):
            f.write(f"{i}X{j}={i*j}\n")
    break