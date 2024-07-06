bool isPalindrome(int x) {
    if (x < 0)
        return false;
    char str[12];
    sprintf(str, "%d", x);
    unsigned int i = 0;
    unsigned int j = strlen(str);
    while (i < j / 2)
    {
        if (str[i] != str[j - 1 - i])
            return false;
        i++;
    }
    return true;
}