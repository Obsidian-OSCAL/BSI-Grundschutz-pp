---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.3.3 Historische Analyse
parent_control: DET.5.3 Schwachstellenscans
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.3.3 - Historische Analyse
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.3 Schwachstellenscans](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.5.3%20Schwachstellenscans.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md) *** |  | KANN | Schwachstellen in öffentlich erreichbaren Systemen oder Anwendungen | anhand bekannter Anzeichen im Audit Log | testen | Detektions-Konzept | >Detektion KANN Schwachstellen in öffentlich erreichbaren Systemen oder Anwendungen anhand bekannter Anzeichen im Audit Log testen.

> [!info]- Guidance
>Die historische Analyse von Logdateien ermöglicht es, vergangene Systemaktivitäten systematisch zu untersuchen, um potenzielle Sicherheitsvorfälle zu identifizieren, die zum Zeitpunkt ihres Auftretens unbemerkt blieben. Nach der Entdeckung einer Schwachstelle kann so rückwirkend festgestellt werden, ob und wie diese bereits ausgenutzt wurde. Die Umsetzung kann durch Etablierung eines zentralisierten Log-Managements mit langer Aufbewahrungsdauer, Implementierung automatisierter Such- und Korrelationsalgorithmen zur Erkennung bekannter Angriffsmuster und Anomalien in den Logdaten, sowie durch forensische Analyse der Zeitstempel, Quell-IPs, Benutzeraktivitäten und Zugriffsversuche erfolgen. Bei der Feststellung von Schwachstellen in öffentlich zugänglichen Systemen ist es sinnvoll die Audit-Logs gezielt nach Indikatoren zu durchsuchen, die auf entsprechende Angriffsmuster hindeuten - darunter ungewöhnliche Zugriffszeiten, auffällige Authentifizierungsversuche, verdächtige Datenbankabfragen oder charakteristische Command-Injection-Versuche, wodurch potenzielle Kompromittierungen retrospektiv aufgedeckt und in ihrem vollen Umfang bewertet werden können.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f64131d9-e0cd-4c01-937a-ea93d7a92371 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f64131d9-e0cd-4c01-937a-ea93d7a92371 |
