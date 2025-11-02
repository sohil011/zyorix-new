#!/bin/bash
# Content guard script to detect forbidden phrases

echo "=== CONTENT GUARD SCAN ==="
echo ""

ERRORS=0

# Scan for forbidden patterns in content files
echo "Scanning for forbidden phrases in app/ and components/..."
echo ""

# Pattern 1: "client" when not "lab client"
echo "1. Checking for 'client(s)' usage..."
grep -rn -i '\bclient\b' app/ --include="*.tsx" --include="*.ts" | grep -v "lab client" | grep -v "node_modules" || echo "  ✓ No issues found"
echo ""

# Pattern 2: "case studies"
echo "2. Checking for 'case studies'..."
grep -rn -i 'case stud' app/ components/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" || echo "  ✓ No issues found"
echo ""

# Pattern 3: delivered/achieved/guaranteed with percentages
echo "3. Checking for guaranteed/delivered/achieved claims..."
grep -rn -iE '(delivered|achieved|guarantee).*[0-9]{1,2}[–-][0-9]{1,2}%' app/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" || echo "  ✓ No issues found"
grep -rn -iE '[0-9]{1,2}[–-][0-9]{1,2}%.*(delivered|achieved|guarantee)' app/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" || echo "  ✓ No issues found"
echo ""

# Pattern 4: enterprise clients
echo "4. Checking for 'enterprise clients' or 'global clients'..."
grep -rn -iE '(enterprise|global) client' app/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" || echo "  ✓ No issues found"
echo ""

# Pattern 5: testimonials
echo "5. Checking for 'testimonials'..."
grep -rn -i 'testimonial' app/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" || echo "  ✓ No issues found"
echo ""

echo "=== SCAN COMPLETE ==="
