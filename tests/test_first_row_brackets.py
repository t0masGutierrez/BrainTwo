import unittest

from update_notes import convert_align_environments, format_generated_markdown_lines


class FirstRowBracketTest(unittest.TestCase):
    def test_first_interval_is_protected_in_source_and_generated_notes(self):
        source = r'''$$
\begin{lgathered}
[a_0,b_0]\\
c_n=\frac{a_n+b_n}{2}\\
[a_{n+1},b_{n+1}]=\begin{cases}
[a_n,c_n],\quad f(a_n)f(c_n)<0\\
[c_n,b_n],\quad f(c_n)f(b_n)<0
\end{cases}
\end{lgathered}
$$
'''
        raw = convert_align_environments(source)
        generated = ''.join(format_generated_markdown_lines(source.splitlines(True)))
        for result in [raw, generated]:
            self.assertIn('\\begin{lgathered}\n\\left[a_0,b_0\\right]', result)
        self.assertEqual(convert_align_environments(raw), raw)

    def test_first_interval_on_same_line_as_environment(self):
        source = r'$$\begin{lgathered} [a_0,b_0]\\c_n=0\end{lgathered}$$'
        expected = source.replace(' [a_0,b_0]', r' \left[a_0,b_0\right]')
        self.assertEqual(convert_align_environments(source), expected)
        self.assertEqual(convert_align_environments(expected), expected)

    def test_no_changes_outside_math_or_to_matrix_columns(self):
        source = '[a,b]\n' + r'$$\begin{lgathered}A=\begin{bmatrix}a&b\\c&d\end{bmatrix}\end{lgathered}$$'
        self.assertEqual(convert_align_environments(source), source)

    def test_old_empty_group_is_replaced_and_nested_brackets_are_preserved(self):
        source = r'$$\begin{lgathered}{}[a,[b,c],\text{]}]\end{lgathered}$$'
        expected = r'$$\begin{lgathered}\left[a,[b,c],\text{]}\right]\end{lgathered}$$'
        self.assertEqual(convert_align_environments(source), expected)

    def test_unmatched_brackets_and_brackets_across_rows_are_untouched(self):
        for body in [r'[a,b', r'[a\\b]', r'[a\end{lgathered}']:
            source = '$$\\begin{lgathered}' + body + '\\end{lgathered}$$'
            self.assertEqual(convert_align_environments(source), source)


if __name__ == '__main__':
    unittest.main()
