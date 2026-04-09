---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.1.1 Versionierung der Systemkonfiguration
parent_control: KONF.2.1 Grundkonfiguration für Systeme
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.1.1 - Versionierung der Systemkonfiguration
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

** Übergeordnetes Control: ** [KONF.2.1 Grundkonfiguration für Systeme](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.2.1%20Grundkonfiguration%20für%20Systeme.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | eine Versionierung vorheriger Konfigurationen |  | verankern | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE eine Versionierung vorheriger Konfigurationen verankern.

> [!info]- Guidance
>Die Versionierung bezeichnet hier die strukturierte Nachvollziehbarkeit von Änderungen an Konfigurationen, also das Speichern, Dokumentieren und bei Bedarf Wiederherstellen älterer Zustände eines IT-Systems. Sie unterscheidet sich von einem einfachen Backup dadurch, dass nicht nur eine Kopie vorliegt, sondern explizit eine fortlaufende Historie mit Vergleichen, Rücksetzpunkten (rollback points) und optional Kommentaren geführt wird. Der Zweck liegt darin, dass eine ungewollte oder fehlerhafte Anpassung an einer Konfiguration im Betrieb schnell erkannt und – wenn erforderlich – präzise auf einen definierten, funktionsfähigen Zustand zurückgesetzt werden kann. Ohne eine solche Versionierung könnte eine fehlerhafte Änderung unbemerkt bleiben oder nur schwer rückgängig gemacht werden. Praktisch umgesetzt kann dies z. B. durch den Einsatz von Konfigurationsmanagement-Tools erfolgen, die automatisch Änderungen versionieren und mit Prüfsummen sichern. Alternativ kann eine Institution auch Konfigurationsdateien regelmäßig in ein Versionsverwaltungssystem wie Git einspielen. Zusätzlich kann es hilfreich sein, Konfigurationsänderungen über standardisierte Änderungsprozesse einzupflegen, sodass jede Anpassung nachvollziehbar protokolliert wird. Eine weitere Möglichkeit kann die Einrichtung von Skripten sein, die Konfigurationsstände automatisch aus Geräten exportieren und revisionssicher ablegen. Zur Umsetzung können Anwendungen zur Geheimnisverwaltung, oft als Secrets-Manager oder Vault bezeichnet, eingesetzt werden. Solche Anwendungen speichern alle Geheimnisse zentral und hochverschlüsselt und stellen sie erst bei Bedarf zur Laufzeit über eine authentifizierte und gesicherte Schnittstelle (API) zur Verfügung. Eine weitere, weit verbreitete Praxis ist die Auslagerung von Secrets aus den Konfigurationsdateien in Umgebungsvariablen (Environment Variables) des ausführenden Systems, wodurch eine strikte Trennung von Code und Konfiguration erreicht wird. Alternativ kann auch die Konfigurationsdatei selbst oder zumindest die Abschnitte, die Geheimnisse enthalten, verschlüsselt werden, wobei dies erfordert, dass der zur Entschlüsselung notwendige Schlüssel seinerseits sicher an die Applikation übergeben wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3b25d629-b441-4365-96fb-d06e2e35b89d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 3b25d629-b441-4365-96fb-d06e2e35b89d |

> [!info]- Links> > related: [TEST.2.1 Versionshistorie](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.2.1%20Versionshistorie.md)
