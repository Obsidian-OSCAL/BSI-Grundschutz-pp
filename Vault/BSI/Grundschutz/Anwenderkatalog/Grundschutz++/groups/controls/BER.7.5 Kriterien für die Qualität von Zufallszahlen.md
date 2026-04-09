---
tags:
- Cryptography
- ber75-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.5 Kriterien für die Qualität von Zufallszahlen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.5 - Kriterien für die Qualität von Zufallszahlen
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | {{Kriterien}} für die Qualität von Zufallszahlen | bei der Schlüsselerzeugung | verankern | IT-Betriebskonzept | >Berechtigung SOLLTE {{ insert: param, ber.7.5-prm1 }} für die Qualität von Zufallszahlen bei der Schlüsselerzeugung verankern.

> [!info]- Guidance
>Wenn bei der Schlüsselerzeugung ein ungeeigneter Zufallszahlengenerator verwendet wird, könnte ein Angreifer Schlüssel errechnen. Daher sind Kriterien für Zufallszahlengeneratoren zu wählen, z.B. Verwendung etablierter, durch unabängige Dritte geprüfter Zufallszahlengeneratoren. Für Details siehe BSI TR-02102-1. Wichtig ist dabei auch, dass die verwendete Zufallsquelle tatsächlich eine nicht vorhersagbare Zahlenerzeugung erreicht. Inbesondere virtualisierte Systeme könnten ungeeignet sein zur Schlüsselerzeugung, da ihre Zufallszahlenquellen nicht direkt auf Hardwarefunktionen zurückgreifen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 426ad852-4455-43a4-b4ff-795ee2caa47b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 426ad852-4455-43a4-b4ff-795ee2caa47b |
