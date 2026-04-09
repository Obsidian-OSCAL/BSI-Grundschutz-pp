---
tags: Data_Leak_Shadow_IT
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.3.11.1 Autorisierung von Peripheriegeräten
parent_control: ASST.3.11 Autorisierung von Systemen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.3.11.1 - Autorisierung von Peripheriegeräten
Tags: "[Data Leak](tags_Data Leak)" "[Shadow IT](tags_Shadow IT)"
Gruppe: [ASST.3 Regelungen zum Gebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.3%20Regelungen%20zum%20Gebrauch.md)
---

** Übergeordnetes Control: ** [ASST.3.11 Autorisierung von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ASST.3.11%20Autorisierung%20von%20Systemen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Informationen und Assets (ASST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST%20Informationen%20und%20Assets.md)**<br> ***  &rarr; [Regelungen zum Gebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.3%20Regelungen%20zum%20Gebrauch.md) *** | Daten | SOLLTE | auch Peripheriegeräte |  | autorisieren | Arbeitsanweisung | >Informationen und Assets für Daten SOLLTE auch Peripheriegeräte autorisieren.

> [!info]- Guidance
>Peripheriegeräte sind externe Hardware-Komponenten sowie virtuelle Geräte, die an IT-Systeme angeschlossen oder eingebunden werden, darunter USB-Sticks, externe Festplatten, Drucker, Kameras, Smartphones, Tablets, virtuelle Laufwerke, softwaredefinierte Netzwerkadapter und emulierte Hardware. Die Autorisierung solcher Geräte schützt vor Sicherheitsrisiken, da unkontrollierte Peripherie Malware einschleusen, Daten exfiltrieren oder als Einfallstor für Angriffe dienen kann; so kann ein privater USB-Datenträger Schadsoftware enthalten, die sich beim Anschluss ausbreitet, oder ein nicht autorisierter Drucker vertrauliche Dokumente in ungeschützten Bereichen ausgeben. Die Umsetzung erfolgt zweckmäßig über eine zentrale Geräteregistrierung, in der alle zulässigen Geräte mit eindeutigen Kennungen erfasst werden; abhängig vom Risikoprofil kann die Autorisierung gerätespezifisch oder für ganze Gerätegruppen erfolgen (etwa für alle beschafften Tastaturen und Mäuse). Administrative Prozesse umfassen ein Antragsverfahren für neue Peripheriegeräte mit Sicherheitsbewertung, die regelmäßige Überprüfung und Aktualisierung der Gerätelisten sowie die Definition von Gerätekategorien mit abgestuften Autorisierungsebenen, beispielsweise vollständig gesperrte USB-Ports für externe Nutzer, eingeschränkte Freigaben für Standardarbeitsplätze und erweiterte Berechtigungen für Administratoren. Technisch wird dies durch Device-Control-Lösungen unterstützt, die nur autorisierte Geräte anhand von Hardware-IDs, Herstellerzertifikaten oder digitalen Signaturen erkennen und freischalten; ergänzend erhöhen Logging-Mechanismen zur Nachverfolgung sämtlicher Peripheriegeräte-Aktivitäten die Transparenz und Auditierbarkeit der Prozesse. Die Autorisierung selbst erfolgt durch die Personen oder Rollen, die in der Organisation für die Freigabe der betreffenden Systeme verantwortlich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 75a9c947-c417-4dc7-a942-c27340f20ade |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 75a9c947-c417-4dc7-a942-c27340f20ade |

> [!info]- Links> > related: [KONF.3.7 Einschränkung angeschlossener Peripherie](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.3.7%20Einschränkung%20angeschlossener%20Peripherie.md)
