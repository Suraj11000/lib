import phonenumbers
from phonenumbers import timezone,geocoder,carrier
number = input("please enter your mobile number with country code :")
phone = phonenumbers.parse(number)
time = timezone.time_zones_for_number(phone)
carrie = carrier.name_for_number(phone,"en")
reg = geocoder.description_for_number(phone,"en")
print(phone)
print(time)
print(carrie)
print(reg)