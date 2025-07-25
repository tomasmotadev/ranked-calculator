import unittest
from calculator import calculate_rank

class TestCalculator(unittest.TestCase):
    
    def test_iron(self):
        balance, rank = calculate_rank(5, 2)
        self.assertEqual(rank, "Iron")
        self.assertEqual(balance, 3)
    
    def test_bronze(self):
        balance, rank = calculate_rank(15, 5)
        self.assertEqual(rank, "Bronze")
        self.assertEqual(balance, 10)
    
    def test_silver(self):
        balance, rank = calculate_rank(30, 10)
        self.assertEqual(rank, "Silver")
        self.assertEqual(balance, 20)
    
    def test_gold(self):
        balance, rank = calculate_rank(70, 10)
        self.assertEqual(rank, "Gold")
        self.assertEqual(balance, 60)
    
    def test_diamond(self):
        balance, rank = calculate_rank(85, 10)
        self.assertEqual(rank, "Diamond")
        self.assertEqual(balance, 75)
    
    def test_legendary(self):
        balance, rank = calculate_rank(95, 5)
        self.assertEqual(rank, "Legendary")
        self.assertEqual(balance, 90)
    
    def test_immortal(self):
        balance, rank = calculate_rank(110, 10)
        self.assertEqual(rank, "Immortal")
        self.assertEqual(balance, 100)

if __name__ == "__main__":
    unittest.main()
