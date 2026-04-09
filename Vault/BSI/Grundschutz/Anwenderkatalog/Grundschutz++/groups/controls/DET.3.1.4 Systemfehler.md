---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.4 Systemfehler
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.4 - Systemfehler
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *** | IT-Systeme | SOLLTE | Fehlermeldungen des Systems |  | protokollieren | Audit Log | >Detektion für IT-Systeme SOLLTE Fehlermeldungen des Systems protokollieren.

> [!info]- Guidance
>Die Protokollierung von Fehlermeldungen kann eine wesentliche Grundlage für die Früherkennung von Sicherheits- und Stabilitätsproblemen in IT-Systemen bilden. Ohne ein systematisches Logging könnte ein kritischer Hardwaredefekt, eine beschädigte Systemdatei oder ein fehlgeschlagener Sicherheits-Update-Prozess unentdeckt bleiben und dadurch die Integrität oder Verfügbarkeit von IT-Systemen gefährden. Ebenso könnte ein Angreifer, der wiederholt unautorisierte Befehle ausführt oder Dienste fehlerhaft anspricht, unbemerkt bleiben, wenn die resultierenden Fehlermeldungen nicht nachvollzogen werden. Auf technischer Ebene kann es zweckmäßig sein, das native Logging des Betriebssysteme zu aktivieren und so zu konfigurieren, dass Fehlermeldungen konsistent erfasst werden – beispielsweise über Syslog-Dienste oder Windows-Event-Logs. Eine zentrale Log-Sammlung kann helfen, auch bei verteilten Systemen eine einheitliche Auswertung vorzunehmen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f04839ae-7df6-4518-a726-994a329e910a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f04839ae-7df6-4518-a726-994a329e910a |
