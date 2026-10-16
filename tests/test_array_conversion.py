import unittest

from update_notes import convert_align_environments, format_generated_markdown_lines


class ArrayConversionTest(unittest.TestCase):
    def test_no_display_style_is_added_and_nested_columns_survive(self):
        source = r'''$$
\begin{align*}
f=\frac{1}{\frac{a}{b}}\\
A=\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}\\
f(x)=\begin{cases}x&x>0\\0&x\le0\end{cases}\\
S=\sum_{i=1}^{n}i
\end{align*}
$$'''
        actual = convert_align_environments(source)
        self.assertNotIn(r'\displaystyle', actual)
        self.assertIn(r'f=\frac{1}{\frac{a}{b}}', actual)
        self.assertIn('a&b\\\\\nc&d', actual)
        self.assertIn(r'\begin{lgathered}', actual)
        self.assertIn(r'\end{lgathered}', actual)
        self.assertNotIn(r'\require{mathtools}', actual)
        self.assertEqual(convert_align_environments(actual), actual)

    def test_multiple_outer_alignment_columns_are_not_deleted(self):
        source = r'$$\begin{align*}x&=y&a&=b\end{align*}$$'
        self.assertEqual(convert_align_environments(source), source)

    def test_single_outer_marker_removed_but_nested_markers_preserved(self):
        source = r'$$\begin{align*}A&=\begin{bmatrix}1&2\\3&4\end{bmatrix}\end{align*}$$'
        actual = convert_align_environments(source)
        self.assertIn(r'A=\begin{bmatrix}1&2\\3&4\end{bmatrix}', actual)

    def test_row_spacing_comments_and_scripts(self):
        source = '$$\n\\begin{align*}\n% note\nx^{a+b}\\\\[2ex]\n\\displaystyle \\frac{1}{2}\n\\end{align*}\n$$'
        actual = convert_align_environments(source)
        self.assertIn('% note\nx^{a+b}\\\\[2ex]', actual)
        self.assertEqual(actual.count(r'\displaystyle'), 1)

    def test_incomplete_or_inline_math_is_not_converted(self):
        for source in [r'$$\begin{align*}x={a\end{align*}$$', r'$\begin{align*}x\end{align*}$']:
            self.assertEqual(convert_align_environments(source), source)

    def test_generated_array_keeps_matrix_columns_without_adding_style(self):
        source = '$$\n\\begin{align*}\nA=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\\\\n\\frac{1}{2}\n\\end{align*}\n$$\n'
        result = ''.join(format_generated_markdown_lines(source.splitlines(True)))
        self.assertIn(r'\begin{lgathered}', result)
        self.assertNotIn(r'\displaystyle', result)
        self.assertIn(r'\frac{1}{2}', result)
        self.assertIn(r'\begin{bmatrix}1&0\\0&1\end{bmatrix}', result)

    def test_outer_array_only_is_replaced(self):
        source = r'$$\begin{array}{l}A=\begin{array}{ll}a&b\\c&d\end{array}\\\frac{1}{2}\end{array}$$'
        expected = r'$$\begin{lgathered}A=\begin{array}{ll}a&b\\c&d\end{array}\\\frac{1}{2}\end{lgathered}$$'
        self.assertEqual(convert_align_environments(source), expected)
        self.assertEqual(convert_align_environments(expected), expected)

    def test_existing_lgathered_stays_unchanged(self):
        source = r'$$\begin{lgathered}x\\y\end{lgathered}$$'
        actual = convert_align_environments(source)
        self.assertEqual(actual, source)
        self.assertEqual(convert_align_environments(actual), actual)

    def test_other_arrays_and_invalid_single_column_arrays_are_untouched(self):
        for source in [r'$$\begin{array}{ll}a&b\end{array}$$',
                       r'$$\begin{array}{l}a&b\end{array}$$']:
            self.assertEqual(convert_align_environments(source), source)


if __name__ == '__main__':
    unittest.main()
