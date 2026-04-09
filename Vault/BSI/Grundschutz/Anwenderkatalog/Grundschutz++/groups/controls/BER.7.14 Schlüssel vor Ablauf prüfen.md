---
tags:
- Cryptography
- ber714-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.14 Schlüssel vor Ablauf prüfen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.14 - Schlüssel vor Ablauf prüfen
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | Schlüssel auf das baldige Auslaufen der Nutzungszeit | {{regelmäßig}} | überprüfen | Verzeichnis öffentlicher Schlüssel | >Berechtigung SOLLTE Schlüssel auf das baldige Auslaufen der Nutzungszeit {{ insert: param, ber.7.14-prm1 }} überprüfen.

> [!info]- Guidance
>Wird die Gültigkeit von Schlüsseln vor dem Auslaufen nicht überwacht, so könnten Schlüssel ungültig werden, wodurch Schnittstellen oder Anwendungen plötzlich nicht mehr verfügbar sein könnten. Läuft ein Schlüssel bald ab, obwohl der Zweck weiterhin bestehen bleibt, so ist es sinnvoll den Schlüssel rechtzeitig durch einen neuen zu ersetzen. Hierbei ist zu beachten, dass bei Schlüsselwechsel verschlüsselte Daten entschlüsselt und erneut verschlüsselt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 681822fa-f526-4580-9436-7c7d4c94edf3 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 681822fa-f526-4580-9436-7c7d4c94edf3 |
