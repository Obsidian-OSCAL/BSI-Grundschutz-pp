---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.1 Grundkonfiguration für Systeme
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.1 - Grundkonfiguration für Systeme
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.2.1.1 Versionierung der Systemkonfiguration](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.2.1.1%20Versionierung%20der%20Systemkonfiguration.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | eine Grundkonfiguration |  | dokumentieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE eine Grundkonfiguration dokumentieren.

> [!info]- Guidance
>Eine Grundkonfiguration (engl. baseline configuration) bezeichnet hier einen dokumentierten Ausgangszustand, der alle sicherheitsrelevanten Einstellungen, Dienste und Komponenten umfasst und als verbindlicher Referenzpunkt für den Betrieb und die Härtung dient. Sie stellt damit eine Art „Zielzustand“ dar, anhand dessen spätere Änderungen überprüft oder Abweichungen erkannt werden können. Ohne eine solche Referenz könnte es bei Installationen, Updates oder Wiederherstellungen zu unsicheren Abweichungen kommen, etwa wenn unnötige Dienste aktiv bleiben, Standardkonten nicht deaktiviert sind oder Kommunikationsschnittstellen unkontrolliert offenstehen; umgekehrt kann eine saubere Grundkonfiguration sicherstellen, dass Systeme konsistent, nachvollziehbar und auf Basis etablierter Sicherheitsanforderungen betrieben werden. Hierzu gehört z.B. die Konfiguration der Uhrensychronisation, von DNS und Verzeichnisdiensten, die Änderung von Default-Zugangsdaten oder der automatische Abruf benötigter Lizenzen. Die Umsetzung einer Grundkonfiguration kann durch verschiedene Maßnahmen unterstützt werden: (1) Es ist sinnvoll, Herstellerdokumentationen zu sichten und empfohlene Härtungseinstellungen (z. B. Deaktivierung unsicherer Protokolle) als Ausgangspunkt zu übernehmen. (2) Ergänzend können Empfehlungen des BSI oder Benchmarks wie die CIS Benchmarks herangezogen werden, um systematisch sicherheitskritische Parameter zu prüfen und einzupflegen. (3) Für komplexe Umgebungen kann ein Konfigurationsskript oder ein Automatisierungs-Tool (z. B. Ansible, Puppet, Chef) genutzt werden, um eine reproduzierbare Baseline einzuspielen und Abhängigkeiten der Komponenten konsistent zu berücksichtigen. Auf diese Weise kann die Institution sicherstellen, dass jede Installation oder Wiederherstellung eines Systems auf einer überprüfbaren und einheitlichen Basis erfolgt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8bd05aba-b395-43cf-a38e-f4e8656df7c4 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 8bd05aba-b395-43cf-a38e-f4e8656df7c4 |
