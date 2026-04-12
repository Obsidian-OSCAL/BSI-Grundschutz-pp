---
tags:
- asst2321-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.2.3.2.1 Software Discovery
parent_control: ASST.2.3.2 Software Bill of Materials (SBOM)
stmt_modal_verb: KANN
stmt_action_word: überprüfen
stmt_documentation: IT-Betriebskonzept
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.2.3.2.1 - Software Discovery
Gruppe: [ASST.2 Inventarisierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.2%20Inventarisierung.md)
---

** Übergeordnetes Control: ** [ASST.2.3.2 Software Bill of Materials (SBOM)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ASST.2.3.2%20Software%20Bill%20of%20Materials%20(SBOM).md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Informationen und Assets (ASST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST%20Informationen%20und%20Assets.md)*<br> *  &rarr; [Inventarisierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.2%20Inventarisierung.md) *</div> | [Informationen und Assets](practices_Informationen_und_Assets_02088622-573d-4225-883c-9afe0c7dc69b) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Aktualität des Inventars der Anwendungen durch ein automatisiertes Verfahren | {{regelmäßig oder bei Änderungen}} | [überprüfen](action_words_überprüfen_907e4ee6-6eb8-4160-902d-5b037f417e6a) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Informationen und Assets KANN die Aktualität des Inventars der Anwendungen durch ein automatisiertes Verfahren {{ insert: param, asst.2.3.2.1-prm1 }} überprüfen.</span>

> [!info]- Guidance
>Die automatische Aktualisierung des Anwendungsinventars (etwa bei Installationen, Konfigurationsänderungen und Deinstallationen) dient in erster Linie der vollständigen Transparenz über die IT-Landschaft. Ein aktuelles Anwendungsinventar kann als Grundlage für Compliance-Nachweise, Lizenzmanagement und Schwachstellenanalysen dienen. Die Automatisierung dieses Prozesses verringert dabei den manuellen Verwaltungsaufwand und erhöht die Datenqualität, da menschliche Fehler oder Versäumnisse bei der Dokumentation vermieden werden können. Konkrete Anwendungsfälle können die automatische Erfassung einer neu installierten ERP-Software im Inventar, die Dokumentation einer Konfigurationsänderung an einer Firewall-Anwendung oder die Entfernung einer nicht mehr genutzten Datenbanksoftware aus dem Inventar sein. Auch Updates von Anwendungen, Änderungen an Zugriffsberechtigungen oder Konfigurationsanpassungen aufgrund neuer Sicherheitsanforderungen können als relevante Ereignisse für eine Inventaraktualisierung betrachtet werden. Für die Umsetzung können Software Asset Management (SAM) Tools eingesetzt werden, die über Agenten oder regelmäßige Netzwerk-Scans Änderungen erkennen. Eine Alternative kann die Integration von Deployment- und Konfigurationsmanagement-Systemen mit der CMDB (Configuration Management Database) sein, wodurch jede Änderung automatisch im zentralen Inventar gespiegelt wird. Die Implementierung von Event-Triggern in der IT-Infrastruktur kann ebenfalls dazu beitragen, dass bei definierten Ereignissen eine sofortige Inventaraktualisierung ausgelöst wird. Einen hohen Mehrwert für alle Sicherheitsbereiche kann es haben, Inventardaten aus verschiedenen Quellen automatisiert miteinander abzugleichen, z.B. aus Verzeichnisdiensten, AMDB, EDR und CMDB. Eine regelmäßige Validierung der Prozesse durch Stichprobenkontrollen kann dabei helfen, die Vollständigkeit und Genauigkeit der automatisierten Inventarisierung zu gewährleisten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | be8d7b56-9709-4d1b-aeaa-cb5fa1b0cca1 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | be8d7b56-9709-4d1b-aeaa-cb5fa1b0cca1 |
