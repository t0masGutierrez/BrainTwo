import unittest
from update_notes import format_generated_markdown_lines

class MathPreservationTest(unittest.TestCase):
    def test_math_text_and_spacing_are_preserved(self):
        source = r"""Units
- $1 m$, $1 \text{m}$, $x_{abc}$, $1 x$, $dx dt npq$
$$
\begin{lgathered}
x_{abc} = 9.80 m/s^{2}
\end{lgathered}
$$
"""
        generated = ''.join(format_generated_markdown_lines(source.splitlines(True)))
        self.assertEqual(generated, '### ' + source)
