function numberToWords(number) {
  var extensiveNumbers = [
    [
      "zero",
      "um",
      "dois",
      "três",
      "quatro",
      "cinco",
      "seis",
      "sete",
      "oito",
      "nove",
      "dez",
      "onze",
      "doze",
      "treze",
      "quatorze",
      "quinze",
      "dezesseis",
      "dezessete",
      "dezoito",
      "dezenove",
    ],
    [
      "dez",
      "vinte",
      "trinta",
      "quarenta",
      "cinquenta",
      "sessenta",
      "setenta",
      "oitenta",
      "noventa",
    ],
    [
      "cem",
      "cento",
      "duzentos",
      "trezentos",
      "quatrocentos",
      "quinhentos",
      "seiscentos",
      "setecentos",
      "oitocentos",
      "novecentos",
    ],
    ["mil"],
  ];
  var n = number.replace(number ? /[^,\d]/g : /\D/g, "").split(","),
    a,
    n,
    valueArray,
    i,
    e = " e ",
    d = " décimo";

  //regex to test if only numeric and minus character are present
  if (number.match(/[^0-9-,]/g)) {
    return "São aceitos apenas números no intervalo de [-99999, 99999]";
  }

  if (number.length > 6) {
    return "Este número é muito grande para ser convertido em extenso no momento.";
  }
  for (
    var f = n.length - 1, l, j = -1, r = [], s = [], t = "";
    ++j <= f;
    s = []
  ) {
    j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
    if (
      !((a = (valueArray = n[j])
        .slice((l = valueArray.length) % 3)
        .match(/\d{3}/g)),
      (valueArray = l % 3 ? [valueArray.slice(0, l % 3)] : []),
      (valueArray = a ? valueArray.concat(a) : valueArray)).length
    )
      continue;
    for (a = -1, l = valueArray.length; ++a < l; t = "") {
      if (!(i = valueArray[a] * 1)) continue;
      (i % 100 < 20 && (t += extensiveNumbers[0][i % 100])) ||
        ((i % 100) + 1 &&
          (t +=
            extensiveNumbers[1][(((i % 100) / 10) >> 0) - 1] +
            (i % 10 ? e + extensiveNumbers[0][i % 10] : "")));
      s.push(
        (i < 100
          ? t
          : !(i % 100)
          ? extensiveNumbers[2][i == 100 ? 0 : (i / 100) >> 0]
          : extensiveNumbers[2][(i / 100) >> 0] + e + t) +
          ((t = l - a - 2) > -1
            ? " " +
              (i > 1 && t > 0
                ? extensiveNumbers[3][t].replace("ão", "ões")
                : extensiveNumbers[3][t])
            : "")
      );
    }
    a =
      (sl = s.length) > 1
        ? ((a = s.pop()), s.join(" ") + e + a)
        : s.join("") ||
          ((!j && n[j + 1] * 1 > 0) || r.length ? "" : extensiveNumbers[0][0]);
    a &&
      r.push(
        a +
          (number
            ? "" +
              (valueArray.join("") * 1 > 1 ? (j ? d + "s" : "") : j ? d : "")
            : "")
      );
  }

  return number.includes("-") ? r.join(e) && "menos " + r : r.join(e);
}

module.exports = {
  numberToWords: numberToWords,
};
