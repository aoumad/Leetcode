// using a combination of hashMap and ArrayList
// HashMap provides O(1) for insert && delete
// List does O(1) for getRandom operation

import java.util.*;

class RandomizedSet
{
    private Map<Integer, Integer> map;
    private Random random;
    private List<Integer> elements;
    
    public RandomizedSet()
    {
        map = new HashMap<>();
        random = new Random();
        elements = new ArrayList<>();
    }

    public boolean insert(int val)
    {
        if (map.containsKey(val))
            return false;
        elements.add(val);
        map.put(val, elements.size() -1);
        return true;
    }

    public boolean remove(int val)
    {
        int lastIndex = map.getOrDefault(val, -1);
        if (lastIndex == -1)
            return false;
        Collections.swap(elements, lastIndex, elements.size() - 1);
        int otherSwappedValue = elements.get(lastIndex);
        map.put(otherSwappedValue, lastIndex);
        elements.remove(elements.size() - 1);
        map.remove(val);
        return true;
    }

    public int getRandom()
    {
        return elements.get(random.nextInt(elements.size()));
    }
}

public class Main {
        public static void main(String[] args) {
            RandomizedSet randomizedSet = new RandomizedSet();
            System.out.println(randomizedSet.insert(1)); // should return true
            System.out.println(randomizedSet.insert(2)); // should return true
            System.out.println(randomizedSet.remove(2)); // should return false
            System.out.println(randomizedSet.getRandom()); // should return either 1 or 2
    }
}