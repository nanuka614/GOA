# def – სიტყვა, რომლითაც ვქმნით ფუნქციას Python-ში
# შემდეგ ვწერთ ფუნქციის სახელს, შემდეგ ვაყენებთ პარამეტრებს (არგუმენტებს) ყრვიტში ()
# და შემდეგ ორწერტილიდან იწყება ფუნქციის ბლოკი (indentation-ით)
# ფუნქციის შიგნით ვწერთ იმას, რასაც ის აკეთებს
# ფუნქციის გამოყენებისთვის (call) უბრალოდ ვწერთ მისი სახელი და ვაწვდით საჭირო არგუმენტებს


#built in functions
print("Hello, World!")
text = "Python"
print(len(text))
print(type(123))
num = int("10")
text2 = str(10)
decimal = float(10)
numbers = [1, 2, 3]
print(sum(numbers))
print(max(numbers))
print(min(numbers))

# simple function
def greet(name):
    print(f"გამარჯობა, {name}!")

greet("ანა")
greet("გიორგი")