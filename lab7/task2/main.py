# main.py

from models import Animal, Dog, Cat


def main():
    # --- Object instantiation ---
    dog1 = Dog("Buddy", 3, "golden", "Labrador")
    dog2 = Dog("Max", 5, "black", "German Shepherd")
    cat1 = Cat("Whiskers", 2, "white", True)
    cat2 = Cat("Shadow", 4, "black", False)

    # --- Store in a list ---
    animals = [dog1, dog2, cat1, cat2]

    print("=" * 40)
    print("       ALL ANIMALS")
    print("=" * 40)

    # --- Iterate and print ---
    for animal in animals:
        print(animal)          # calls __str__
        print(animal.speak())  # polymorphism
        print(animal.describe())
        print("-" * 40)

    # --- Unique methods ---
    print("\n--- Special Actions ---")
    print(dog1.fetch())
    print(cat1.purr())

    # --- Polymorphism demo ---
    print("\n--- Polymorphism: speak() ---")
    for animal in animals:
        print(animal.speak())


if __name__ == "__main__":
    main()