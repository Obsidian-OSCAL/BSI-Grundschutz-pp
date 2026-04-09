---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.6.1 Mandantenfähigkeit
parent_control: KONF.6.6 Getrennte Datenhaltung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.6.1 - Mandantenfähigkeit
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

** Übergeordnetes Control: ** [KONF.6.6 Getrennte Datenhaltung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.6%20Getrennte%20Datenhaltung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Anwendungen | SOLLTE | wenn die Anwendung mehrere Mandaten bedient, für jeden Mandanten eine eigene Berechtigungskonfiguration |  | aktivieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE wenn die Anwendung mehrere Mandaten bedient, für jeden Mandanten eine eigene Berechtigungskonfiguration aktivieren.

> [!info]- Guidance
>Der Ausdruck "mehrere Mandanten" (im Englischen auch multi-tenancy genannt) bezieht sich auf eine Softwarearchitektur, bei der eine einzige Instanz einer Anwendung gleichzeitig die Bedürfnisse mehrerer, voneinander unabhängiger Kundengruppen (Mandanten) bedient. Eine eigene Berechtigungskonfiguration bedeutet, dass jeder Mandant eine separate, von den anderen getrennte Sammlung von Zugriffsregeln und -rechten erhält. Dies dient dem Schutz vor Datenlecks, da ein Angreifer, der sich unrechtmäßig Zugang zu einem Mandanten verschafft, dadurch nicht automatisch die Berechtigungen für andere Mandanten übernimmt. Eine separate Konfiguration kann verhindern, dass ein Fehlverhalten oder eine Fehlkonfiguration bei einem Mandanten die Sicherheit aller anderen beeinträchtigt. Technische Möglichkeiten hierfür sind die Verwendung von mandantenspezifischen Datenbank-Schemata oder die logische Trennung von Daten innerhalb einer gemeinsamen Datenbank durch Mandanten-IDs. Darüber hinaus kann die Institution sicherstellen, dass die Authentifizierung und Autorisierung für jeden Mandanten streng getrennt sind, zum Beispiel durch die Nutzung unterschiedlicher API-Schlüssel oder Single-Sign-On-Konfigurationen pro Mandant.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 2f0d27ba-6f8f-4f1e-9f5b-29cd79d7b08d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 2f0d27ba-6f8f-4f1e-9f5b-29cd79d7b08d |
