---
tags: Zero_Trust_Advanced_Persistent_Threats_APT_Honeypot
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.10 Host-basierte Köder
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.10 - Host-basierte Köder
Tags: "[Zero Trust](tags_Zero Trust)" "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))" "[Honeypot](tags_Honeypot)"
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | IT-Systeme | KANN | Host-basierte Köder |  | installieren | Detektions-Konzept | >Detektion für IT-Systeme KANN Host-basierte Köder installieren.

> [!info]- Guidance
>Köder sind Anwendungen, Dateien oder Datensätze auf dem IT-System, welche die Aufmerksamkeit von Angreifern auf sich ziehen, um diese zu entdecken, nachzuverfolgen oder von echten Zielen abzulenken. Sie werden auch als Canaries oder Tripwire bezeichnet. Beispielsweise kann das Sicherheitsteam eine gefälschte, aber verlockende Datei (z. B. „IBAN-Kontodaten.xlsx“) im System platzieren und eine Überwachung einrichten, die sie benachrichtigt, wenn die Datei berührt wird - da legitime Benutzer nicht darauf zugreifen können, signalisiert jede Interaktion potenziell unbefugte Aktivitäten. Ein weiteres Beispiel ist eine Datei „unattended.xml“, da sie für Angreifer nützliche Anmeldedaten für automatische Installationen enthalten könnte. Indem Sie eine gefälschte Version mit harmlosen Daten erstellen und den Zugriff auf die Datei oder Anmeldeversuche mit diesen Zugangsdaten überwachen, erhalten Sie eine frühzeitige Warnung, wenn jemand Ihr System auf der Suche nach einfachen Möglichkeiten zur Erlangung von Administratorrechten durchforstet, so dass Sie reagieren können, bevor es zu einem schwerwiegenderen Verstoß kommt. Allerdings kann es hierbei zu falsch-positiv Vorfallsmeldungen kommen, insbesondere wenn die Köder dort platziert werden wo sie für legitime Nutzende leicht zugänglich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dcdb44ac-280a-424b-bd4f-9264137d6895 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | dcdb44ac-280a-424b-bd4f-9264137d6895 |

> [!info]- Links> > related: [DET.4.11.2 Netzwerk-Honeypots](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.11.2%20Netzwerk-Honeypots.md)
